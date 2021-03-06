from .base import *
from secret_key_generator import secret_key_generator

SECRET_KEY = secret_key_generator.generate()

CORS_ORIGIN = 'http://localhost'
CORS_ORIGIN2 = 'http://10.0.0.139'
CORS_ORIGIN3 = 'http://127.0.0.1'

CORS_ALLOWED_ORIGINS = [CORS_ORIGIN, CORS_ORIGIN2, CORS_ORIGIN3]
CORS_ALLOW_ALL_ORIGINS = True

# May be needed for CSRF cookies
# CORS_ALLOW_CREDENTIALS = True

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