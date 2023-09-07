
<!DOCTYPE html>
<html>
<head>
    <title>Laravel 8 Form Example Tutorial</title>
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
</head>
@component('mail::message')
<body>
<div class="container mt-4">
    <div class="card">
        <div class="card-header text-center font-weight-bold">
            Сброс пароля
        </div>
        <div class="card-body">
            <form name="add-blog-post-form" id="add-blog-post-form" action="{{url('store-form')}}">
              Verification code: {{$verification_code = 24353}}
            </form>
        </div>
    </div>
</div>
</body>
@endcomponent
</html>
