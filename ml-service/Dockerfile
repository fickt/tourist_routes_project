FROM python

RUN mkdir /usr/src/app

WORKDIR /usr/src/app

COPY . /usr/src/app
RUN pip install --upgrade pip
RUN pip install protobuf==3.20.*
RUN pip install --no-cache-dir -r requirements.txt
ENV PYTHONUNBUFFERED 1

CMD [ "uvicorn", "main:app", "--host", "0.0.0.0", "--port", "9000", "--reload"]

EXPOSE 9000