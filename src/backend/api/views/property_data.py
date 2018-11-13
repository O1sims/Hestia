from drf_yasg import openapi
from drf_yasg.utils import swagger_auto_schema

from rest_framework.response import Response
from rest_framework.renderers import JSONRenderer
from rest_framework.generics import ListCreateAPIView

from api.services.MongoService import MongoService
from api.models.property_data import PropertyDataModel

import analytics.config as config


SEARCH_Q = openapi.Parameter(
    name='q',
    in_=openapi.IN_QUERY,
    description='A string of search keywords',
    type=openapi.TYPE_STRING,
    required=True)


class PropertyDataView(ListCreateAPIView):
    renderer_classes = (JSONRenderer, )
    serializer_class = PropertyDataModel

    @swagger_auto_schema(manual_parameters=[SEARCH_Q])
    def get(self, request, *args, **kwargs):
        search_query = self.request.GET.get('q', None)
        if search_query is None:
            raise ValueError(
                'Please provide some search query with the `q` query parameter')
        properties = MongoService().search_collection(
            collection_name=config.MONGO_DB_INFO['propertyCollection'],
            search_string=search_query.lower())
        return Response(
            data=properties,
            status=200)

    @swagger_auto_schema(responses={201: "Created"})
    def post(self, request, *args, **kwargs):
        PropertyDataModel(
            data=request.data).is_valid(
            raise_exception=True)
        properties = MongoService().insert_to_collection(
            collection_name=config.MONGO_DB_INFO['propertyCollection'],
            data=request.data)
        return Response(
            data=properties,
            status=200)
