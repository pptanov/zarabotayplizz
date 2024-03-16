import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Table} from "antd"
import {Button} from "antd"
import axios from 'axios'
import { ColumnsType } from 'antd/es/table'


function App() {
  
  const [page, setPage] = useState(1);
  let [dataSource, setDataSource] = useState();
  let [dataSourceNext, setDataSourceNext] = useState();

  interface DataType {
    id: string;
    title: string;
  }
  
  const columns: ColumnsType<DataType> = [
    {
      title: 'id',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'title',
      dataIndex: 'title',
      key: 'title',
    },
  ];

  const limit = 10;
  
  const getPagedData = async (page: number, limit: number) => {
    const response = await axios.get(`https://jsonplaceholder.typicode.com/photos?_limit=${limit}&_page=${page}`)
    setDataSource(response.data);
  }
  const getPagedDataNext = async (page: number, limit: number) => {
    const response = await axios.get(`https://jsonplaceholder.typicode.com/photos?_limit=${limit}&_page=${page}`)
    setDataSourceNext(response.data);
  }


  getPagedData(page, limit);


  function isDisabledBack(){
    return (page <= 1) ? true : false;
  }

  function isDisabledForward(){
    getPagedDataNext(page+1, limit);
    return (!dataSourceNext) ? true : false;
  }


  let valueBackButton = isDisabledBack();
  let valueForwardButton = isDisabledForward();


  return (
    <>
      <Table pagination={false} dataSource={dataSource} columns={columns} />
      <Button onClick={() => setPage(page-1)} disabled={valueBackButton}>Назад</Button>
      <Button onClick={() => setPage(page+1)} disabled={valueForwardButton}>Вперед</Button>
      <p>Page: {page}</p>
    </>
  )
}

export default App
