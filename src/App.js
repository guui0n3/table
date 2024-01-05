import React ,{useState,createContext,useEffect} from 'react';
import { Link  } from 'react-router-dom';
import { BrowserRouter as Router , Route } from 'react-router-dom';
import { 
  CheckOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
  FileFilled
 } from '@ant-design/icons';
import {
  Button,
  Menu,
  Layout,
  theme,
  Cascader,
  Checkbox,
  Table,
  ColorPicker,
  DatePicker,
  Form,
  Content,
  Input,
  InputNumber,
  Radio,
  Select,
  Slider,
  Typography,
  Switch,
  TreeSelect,
  Upload,
} from 'antd';
export default function TableKit(){
  const [size , setSize] = useState('');
  const {Header , Sider , Footer , Content} = Layout;
  const {SubMenu} = Menu;
  const [showForm, setShowForm] = useState(false);
  const [collapsed, setCollapsed] = useState(false);
  const [activeFormIndex, setActiveFormIndex] = useState(null);
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const handleMenuClick = (key) => {
    setActiveFormIndex(key);
  };
 
  function SeeForm(){
    const [data , setData] = useState([]);

    useEffect(() => {
        fetch('http://localhost/%E7%BD%91%E7%AB%99/reactdemo/src/find.php')
        .then(response => response.json())
        .then(result => setData(result))
        .catch(error => console.error('Error:', error));
    }, []);

    const columns = [
      {
        title: '来源',
        dataIndex: 'laiyuan_name',
      },
      {
        title: '公司',
        dataIndex: 'gongsi_name',
      },
      {
        title: '供应商',
        dataIndex: 'gongying_name',
      },
      {
        title: '采购时间',
        dataIndex: 'shijian_name',
      },
      {
        title: '供应内容',
        dataIndex: 'neirong_name',
      },
    ];
    const formattedData = data.map(item => {
      return {
        laiyuan_name: item.来源,
        gongsi_name: item.公司,
        gongying_name: item.供应商,
        shijian_name: item.采购时间,
        neirong_name: item.采购内容,
      };
    });
    return(
      <Table
      columns={columns}
      dataSource={formattedData}
      bordered={true}
      style={{ borderCollapse: 'collapse' }}
      //title={() => 'Header'}
      //footer={() => 'Footer'}
    />
    );
  }

  function YourInsertData(){
    const [zizi , setZizi] = useState('');
    const [gongsi , setGongsi] = useState('');
    const [gongying , setGongying] = useState('');
    const [shijian , setShijian] = useState('');
    const [neirong , setNeirong] = useState('');
    function handleInputChange(event){
      const {id , value} = event.target;
      switch (id){
        case 'laiyuan' :
          setZizi(value);
          break;
        case "gongsi" :
          setGongsi(value);
          break;
        case "gongying" :
          setGongying(value);
          break;
        case "shijian" :
          setShijian(value);
          break;
        case "neirong" :
          setNeirong(value);
          break;
        default:
          break;
      }
  }
    return(
    <>
    <h1 style={{marginLeft:'50px'}}>插入数据表单</h1>
    <Form 
    id='form' 
    action='http://localhost/%E7%BD%91%E7%AB%99/reactdemo/src/main.php'
    method='post'
    labelCol={{span:5}}
    wrapperCol={{span:16}}
    style={{width:600,border: '1px solid #ccc',marginTop:'20px',marginLeft:'20px'}}
    >
      <br/>
      <Form.Item
      label = '请输入来源:'
      name = 'laiyuan'
      rules={[{
        required:true,
        message:"请输入来源！"
      },
    ]}
      >
        <Input type="text" id='laiyuan' name='laiyuan' value={zizi} onChange={handleInputChange}/>
      </Form.Item>
      
      <Form.Item
      label = '请输入公司名:'
      name = 'gongsi'
      >
        <Input type="text" id="gongsi" name='gongsi' value={gongsi} onChange={handleInputChange}/>
      </Form.Item>

      <Form.Item
      label = '请输入供应商:'
      name = 'gongying'
      >
        <Input type="text" id="gongying" name='gongying' value={gongying} onChange={handleInputChange}/>
      </Form.Item>
      
      <Form.Item
      label = '请输入时间:'
      name = 'shijian'
      >
        <Input type="text" id="shijian" name='shijian' placeholder='****/**/**' value={shijian} onChange={handleInputChange}/>
      </Form.Item>
      <Form.Item
      label = '请输入采购内容:'
      name = 'neirong'
      >
        <Input.TextArea 
          id="neirong" 
          name='neirong' 
          value={neirong} 
          onChange={handleInputChange}
          maxLength='300'
          placeholder="disable"
          style={{
          width:300,
          height: 120,
          resize: 'none',
        }}/>
      </Form.Item>
      <Form.Item
      wrapperCol={{ offset: 8 }}
      name = 'button'
      >
        <Button type="primary" shape="round" icon={<CheckOutlined />} size='large' onClick={() => document.getElementById('form').submit()}>提交</Button> 
      </Form.Item>
    </Form>
    </>
  );
}

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider trigger={null} collapsible collapsed={collapsed} width={200}>
        <div className="demo-logo-vertical" />
          <Menu
            theme="dark"
            mode="inline"
            defaultSelectedKeys={['1']}
            onClick={(e) => handleMenuClick(e.key)}
            items={[
              {
                key: '1',
                icon: <FileFilled />,
                label: '表单',
                children :[
                  {
                    key:'2',
                    label: '插入数据表单',
                  },
                  {
                    key:'3',
                    label: 'gpu数据',
                  },
                  {
                    key:'4',
                    label: '待定4',
                  },
                ]
              },
              {
                key: '5',
                icon: <UserOutlined />,
                label: '待定5',
              },
              {
                key: '6',
                icon: <VideoCameraOutlined />,
                label: '待定6',
              },

            ]}
          />
      </Sider>
      <Layout>
        <Header
        style={{
          padding:0,
          background: colorBgContainer,
        }}
        >
          <Button 
          type='text' 
          icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}  
          onClick={() => setCollapsed(!collapsed)}
          style={{
            fontSize: '16px',
            width: 64,
            height: 64,
          }}
          />
          </Header>
          <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 200,
            background: colorBgContainer,
          }}
        >
      {activeFormIndex === '2' && (
        <YourInsertData />
      )}

      {activeFormIndex === '3' && (
        <SeeForm />
      )}
        </Content>
        <Footer style={{ textAlign: 'center' }}>Believe you can and you're halfway there.</Footer>
      </Layout>
    </Layout>
  );
}