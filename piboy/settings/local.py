from .base import *
from secret_key_generator import secret_key_generator

SECRET_KEY = secret_key_generator.generate()

CORS_ORIGIN = 'http://localhost:3000'

CORS_ALLOWED_ORIGINS = ['http://localhost:3000']

DEBUG = True

ALLOWED_HOSTS = ['*']

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.sqlite3',
        'NAME': BASE_DIR / 'db.sqlite3',
    }
}

# MEDIA & STATIC

STATIC_URL = '/static/'
STATICFILES_DIRS = [BUILD_DIR / 'static']
STATIC_ROOT = BASE_DIR / 'static'

MEDIA_URL = '/media/'
MEDIA_ROOT = BASE_DIR / 'media'