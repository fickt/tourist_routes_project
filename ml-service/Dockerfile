FROM python

ADD ./processed.csv .
ADD ./main.py .
ADD ./create_local_db.py .
ADD ./recommender.py .

COPY ./req.txt .

RUN pip install --no-cache-dir -r req.txt

CMD ["python", "create_local_db.py"]
CMD [ "uvicorn", "main:app", "--host", "0.0.0.0", "--port", "80" ]