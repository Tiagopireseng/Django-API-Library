FROM python:3.9-alpine
LABEL maintainer="tiagopireseng"
# MAINTAINER App developed by Devs from Brasil CONNECTION

ENV PYTHONUNBUFFERED 1

COPY ./requirements.txt /tmp/requirements.txt 
COPY backend /app
WORKDIR /app
EXPOSE 8000

ARG DEV=false

RUN python -m venv /py && \
    /py/bin/pip install --upgrade pip && \
    apk add --update --no-cache postgresql-client && \
    apk add --update --no-cache libpq-dev && \
    apk add --update --no-cache python3-dev && \
    apk add --update --no-cache --virtual .tmp-build-deps && \
    /py/bin/pip install -r /tmp/requirements.txt && \
    rm -rf /tmp && \
    apk del .tmp-build-deps && \
    adduser \
     --disabled-password \
     --no-create-home \
     django-user

ENV PATH="/py/bin:$PATH"
    


