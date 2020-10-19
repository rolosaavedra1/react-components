var Chorizo = () => (
    <li>{'chorizo'}</li>
);
var Empanadas = () => (
    <li>{'empanadas'}</li>
);
class GroceryListItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hover: false
        }
    } 
    onMouseEnter() {
        this.setState({ hover: !this.state.hover })
    }
    onMouseLeave() {
        this.setState({ hover: !this.state.hover })
    }
    
    render() {
        var style = {
            fontWeight: this.state.hover ? 'bold' : 'normal'
        };
        return (
            <li style={style} onMouseEnter={this.onMouseEnter.bind(this)} onMouseLeave={this.onMouseLeave.bind(this)}> {this.props.items}</li>
        );
    }
}
var GroceryList = (props) => (
    <ul>
        {props.items.map(items =>
            <GroceryListItem items={items} />
        )}
    </ul>
);
var groceryItems = ['chorizo', 'empandas'];
ReactDOM.render(
    <GroceryList items={groceryItems} />, document.getElementById('app')
);
