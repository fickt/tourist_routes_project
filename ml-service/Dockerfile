FROM python

ADD ./processed.csv .
ADD ./main.py .

COPY ./req.txt .

RUN pip install --no-cache-dir -r req.txt

CMD [ "uvicorn", "main:app", "--host", "0.0.0.0", "--port", "80" ]