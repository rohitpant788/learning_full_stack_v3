
function App() {

  const items = [
    { id: 1, name: 'Item 1' },
    { id: 2, name: 'Item 2' },
    { id: 3, name: 'Item 3' },
];

return <ItemList props={items} />;
}

function ItemList ({props}){

  //Creating a list of li components...
  const lis = props.map(

    function (prop){
      return <li key={prop.id}>{prop.name}</li>
    }
  )

  return <div>
    {lis}
  </div>
}

export default App