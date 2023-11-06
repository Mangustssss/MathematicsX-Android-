from django.urls import path
from . import views
from .views import quadratic_results

urlpatterns = [
    path('quadratic-results/', quadratic_results, name='quadratic_results'),
]