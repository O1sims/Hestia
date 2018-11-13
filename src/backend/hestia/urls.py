import api.config

from django.conf.urls import url

from api.views.property_data import PropertyDataView, PropertyDataIdView
from api.views.property_valuation import PropertyValuationEstimationView, PropertyValuationDifferentialView

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
        PropertyDataIdView.as_view()),

    # Property valuation
    url(r'^api/v{}/property_valuation/estimation$'.format(
        config.API_VERSION),
        PropertyValuationEstimationView.as_view()),

    url(r'^api/v{}/property_valuation/differential$'.format(
        config.API_VERSION),
        PropertyValuationDifferentialView.as_view()),

    # Swagger
    url(r'^swagger/$',
        schema_view.with_ui(
            'swagger', cache_timeout=0),
        name='schema-swagger-ui'),

    url(r'^redoc/$',
        schema_view.with_ui(
            'redoc', cache_timeout=0),
        name='schema-redoc')
])
