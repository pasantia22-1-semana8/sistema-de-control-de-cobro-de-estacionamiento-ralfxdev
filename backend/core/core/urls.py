"""Main URLs module."""

# Importing the settings, include, path, static and admin from django.
from django.conf import settings
from django.urls import include, path
from django.conf.urls.static import static
from django.contrib import admin

# A list of url patterns.
urlpatterns = [
    # Django Admin
    path('admin/', admin.site.urls),

    path('', include(('users.urls', 'users'), namespace='users')),

] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
