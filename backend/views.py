from django.shortcuts import render
from django.views.generic import TemplateView

class IndexView(TemplateView):
    template_name = 'base.html'

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)

        #  This is data we want to share with react
        context['sharedData'] = {
            'first_name': 'Scott',
            'site_name': 'Piboy Technical Solutions',
            'message': 'Welcome to piboy.ca!',
        }

        return context