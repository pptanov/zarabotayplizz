import { Table } from "antd"

export default function Tabl(){
    const dataSource = [
        {
          key: '1',
          name: 'Mike',
          age: 32,
          address: '10 Downing Street',
          height: 200,
          weight: 100
        },
        {
          key: '2',
          name: 'John',
          age: 42,
          address: '10 Downing Street',
          height: 160,
          weight: 50
        },
        {
          key: '3',
          name: 'Paul',
          age: 19,
          address: 'Voroshilova str.',
          height: 174,
          weight: 66
        },
        {
          key: '4',
          name: 'Dmitry',
          age: 19,
          address: 'Soviet str.',
          height: 171,
          weight: 80
        },
      ];
      
      const columns = [
        {
          title: 'Name',
          dataIndex: 'name',
          key: 'name',
        },
        {
          title: 'Age',
          dataIndex: 'age',
          key: 'age',
        },
        {
          title: 'Address',
          dataIndex: 'address',
          key: 'address',
        },
    
        {
          title: 'Height',
          dataIndex: 'height',
          key: 'height',
        },
    
        {
          title: 'Weight',
          dataIndex: 'weight',
          key: 'weight',
        }
      ];

      return(
        <>
            <Table dataSource={dataSource} columns={columns} />
        </>
      );
}