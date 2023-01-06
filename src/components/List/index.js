import React, { useState } from 'react';
import ListHeader from '../../components/ListHeader';
import ListRow from '../../components/ListRow';
import { ListBody, EmptyMessage } from './styles'

export default function List({history, data, navigateTo, columns = ['Name'], columnsData = ['name'], search }) {

  const [items, setItems] = useState([]);

  

  return (
    <ListBody>
      <ListHeader
        columns={columns}
      />
      {items.length > 0 && items.map((information, index) => (
        <ListRow
          data={information}
          key={index}
          onClick={() => { history.push(`/${navigateTo}/${information.id}`) }}
          columnsData={columnsData} />
      ))}
      {items.length === 0 &&
        <EmptyMessage>No items found</EmptyMessage>
      }
    </ListBody>
  )

  React.useEffect(() => {
    let newItems = [...data];
    if (search) {
      newItems = newItems.filter((str) => {
        let values = Object.values(str);
        return values.filter(v => v.toLowerCase().indexOf(search.toLowerCase()) >= 0).length > 0;
      });
    }
    setItems(newItems);
  }, [search, data]);
}