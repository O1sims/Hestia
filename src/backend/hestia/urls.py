import api.config

from django.conf.urls import url

from api.views.property_data import PropertyDataView, PropertyDataIdView

from rest_framework.urlpatterns import format_suffix_patterns

from drf_yasg.views import get_schema_view
from drf_yasg import openapi


schema_view = get_schema_view(
    openapi.Info(
        title="Hestia API",
        default_version=config.API_VERSION,
        description="Hestia API documentation"
    ),
    validators=['flex', 'ssv'],
    public=True
)

urlpatterns = format_suffix_patterns([
    # Properties collection
    url(r'^api/v{}/properties/$'.format(
        config.API_VERSION),
        PropertyDataView.as_view()),

    url(r'^api/v{}/properties/(?P<propertyId>.+)/$'.format(
        config.API_VERSION),
        PropertyDataIdView.as_view())
])
