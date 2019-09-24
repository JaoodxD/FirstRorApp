class AllArticles extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        var articles= this.props.articles.map(article => {
            return (
                <div key={article.id}>
                    <Article
                    article={article}
                    handleDelete={this.props.handleDelete}
                    handleUpdate={this.props.handleUpdate}
                    signed_in={this.props.signed_in}
                    
                    />
                    {console.log(this.props.signed_in)}
                </div>
            );
        });
        return <div>{articles}</div>;
    }
}