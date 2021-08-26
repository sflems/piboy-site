import os
import subprocess
from bs4 import BeautifulSoup

from django.conf import settings
from django.core.management import call_command
from django.core.management.base import BaseCommand

index_path = os.path.join(settings.BUILD_DIR, 'index.html')
output_path = os.path.join(settings.TEMPLATES_DIR, 'base-react.html')


class Command(BaseCommand):
    help = 'Collect React index.html and static files'

    def handle(self, *args, **kwargs):
        client_dir = getattr(settings, 'CLIENT_DIR', 'client')
        if not os.path.exists(client_dir):
            self.stdout.write(self.style.ERROR(f'No client directory found'))
            return

        self.stdout.write('Building client app ...')
        try:
            subprocess.check_call(['npm run build'], cwd=client_dir, shell=True)
        except Exception as e:
            self.stdout.write(self.style.ERROR(str(e)))


        self.stdout.write('Collecting static files ...')
        call_command(
            'collectstatic', interactive=False,
            clear=True, verbosity=0
        )

        self.stdout.write('Copying manifest and robots to static dir ...')
        try:
            static_target = str(settings.BASE_DIR) + settings.STATIC_URL
            build_target = str(client_dir) + "/build/"
            callOne = f'cp {build_target}manifest.json {static_target}'
            callTwo = f'cp {build_target}robots.txt {static_target}'
            
            subprocess.check_call([callOne], shell=True)
            subprocess.check_call([callTwo], shell=True)
        except Exception as e:
            self.stdout.write(self.style.ERROR(str(e)))

        self.stdout.write('Copying media to media dir ...')
        try:
            media_dir = str(settings.BASE_DIR) + settings.MEDIA_URL
            media_target = str(client_dir) + "/src/media/"
            callThree = f'cp {media_target}* {media_dir}'
            
            subprocess.check_call([callThree], shell=True)
        except Exception as e:
            self.stdout.write(self.style.ERROR(str(e)))

        exists = os.path.exists(index_path)
        if not exists:
            # print or raise error
            self.stdout.write(self.style.ERROR(f'No index path'))
            return

        html = open(index_path).read()
        soup = BeautifulSoup(html, 'html.parser')

        soup.head.insert_after("{% block head %}{% endblock head %}")

        root = soup.find("div", id="root")
        root.insert_before("{% block body %}")
        root.insert_after("{% endblock body %}")

        style = soup.new_tag('style', type="text/css")
        style.string = "{% block css %}{% endblock css %}"

        soup.head.insert(len(soup.head.contents), style)

        with open(output_path, 'w', encoding='utf-8') as file:
            file.write(str(soup))

        self.stdout.write(
            self.style.SUCCESS(f'Exported file: {output_path}')
        )