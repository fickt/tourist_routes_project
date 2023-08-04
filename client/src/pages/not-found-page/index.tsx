import NotFound from "components/not-found";

function NotFoundPage() {
    return ( 
        <div className="content container">
            <NotFound title="Страница не найдена" buttonText="На главную"></NotFound>
        </div>
     );
}

export default NotFoundPage;