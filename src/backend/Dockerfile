FROM python:2.7

# Set up apt-get
RUN apt-get -qq update

# Download Python framework and dependencies
RUN apt-get install -qq -y build-essential libffi-dev python-dev

# Set up the Django framework
RUN mkdir /hestia
WORKDIR /hestia
ADD requirements.txt /hestia/
RUN pip install -r requirements.txt

# Expose ports
EXPOSE 5000
