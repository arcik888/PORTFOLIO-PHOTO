from django.urls import path
from django.conf.urls.static import static
from django.conf import settings
from .views import CategoryView, PhotoView, InfoView, MenuView, CategoryPhotoView


urlpatterns = [
    path('category/', CategoryView.as_view()),
    path('photos/', PhotoView.as_view()),
    path('photos/<int:category_id>/', CategoryPhotoView.as_view()),
    path('info/', InfoView.as_view()),
    path('menu/', MenuView.as_view()),
]
