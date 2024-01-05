import React,{useState , useEffect} from "react";
import { Link  } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import './素材/like.css';
export default function Your(){
    const [data , setData] = useState([]);

    useEffect(() => {
        fetch('http://localhost/%E7%BD%91%E7%AB%99/reactdemo/src/find.php')
        .then(response => response.json())
        .then(result => setData(result))
        .catch(error => console.error('Error:', error));
    }, []);
    return (
        <div>
            <h1>表格数据</h1>
            <table className="tables">
        <thead>
          <tr>
            <th>来源</th>
            <th>公司</th>
            <th>供应商</th>
            <th>采购时间</th>
            <th>采购内容</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{item.来源}</td>
              <td>{item.公司}</td>
              <td>{item.供应商}</td>
              <td>{item.采购时间}</td>
              <td>{item.采购内容}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    )
}
