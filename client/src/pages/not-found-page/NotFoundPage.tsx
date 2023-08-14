import NotFound from "components/not-found/NotFound";

const NotFoundPage = () => {
    
    return (
        <div className="content container">
            <NotFound title="Страница не найдена" buttonText="На главную" />
        </div>
    );
}

export default NotFoundPage;