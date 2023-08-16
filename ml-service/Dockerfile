FROM python

RUN mkdir /usr/src/app

WORKDIR /usr/src/app

COPY ./req.txt .
COPY . .
RUN pip install --no-cache-dir -r req.txt
ENV PYTHONUNBUFFERED 1

CMD ["python", "create_local_db.py"]
CMD [ "uvicorn", "main:app", "--host", "0.0.0.0", "--port", "9000" ]

EXPOSE 9000