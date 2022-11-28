const List =(props) => (
<ul>
    {props.list.map((item) => (
        <Item key ={item.ObjectID} item = {item} />
    ))}
</ul>
);

const Item = (props) => (
    <li>
        <span>
            <a href={props.item.url} > {props.item.title}</a>
            <span>{props.item.author}</span>
            <span>{props.item.num_comments}</span>

        </span>
    </li>
)
  

export default List;
