FROM nginxproxy/nginx-proxy
RUN { \
      echo 'server_tokens off;'; \
      echo 'client_max_body_size 100m;'; \
      echo 'keepalive_requests 700;'; \
      echo 'fastcgi_read_timeout 100;'; \
      echo 'fastcgi_send_timeout 100;'; \
      echo 'fastcgi_connect_timeout 100;'; \
    } > /etc/nginx/conf.d/my_proxy.conf