import React from "react"

import { Form, Input, InputNumber, Checkbox,  Row, Col, Button, Upload, message, Select, Tooltip} from 'antd';
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';

import HotelApi from "./../../services/HotelApi";

const { Option } = Select;

const plainOptions = ["piscina", "estacionamento", "Café da manhã", "Ar condicionado", "Wifi", "Academia"];


// Transformação do input
function getBase64(img, callback) {
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result));
    reader.readAsDataURL(img);
  }

//Aqui vamos mostrar a previa para o usuário e o feedback caso ele tenha passado uma imagem invalida
function beforeUpload(file) {
    const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
    if (!isJpgOrPng) {
        message.error('Você pode apenas carregar imagens JPG/PNG!');
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
        message.error('Imagem precisa ser menor que 2MB!');
    }
    return isJpgOrPng && isLt2M;
}

const portugueseToEnglish = {
    "piscina" : "pool",
    "estacionamento" : "parking",
    "Café da manhã" : "breakfast", 
    "Ar condicionado" : "air_conditional", 
    "Wifi" : "wifi", 
    "Academia" : "gym"
}

class RegisteryHotel extends React.Component{
    constructor(props){
        super(props);
        this.state = {
          loading: false,
        };
    }

    handleImageChange = info => {
        if (info.file.status === 'uploading') {
          this.setState({ loading: true });
          return;
        }
        if (info.file.status === 'done') {
          // Get this url from response in real world.
          getBase64(info.file.originFileObj, imageUrl =>
            this.setState({
              imageUrl,
              loading: false,
            }),
          );
        }
      };

    formRef = React.createRef();

    onFinish = async (values) => {
        const location = this.props.locationsStringObject[values.city]['city'];

        const viabilities = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
        for(var i = values.date_beginning - 1; i <= values.date_end - 1; i++){
            viabilities[i] = 1
        }
        console.log(viabilities)
        HotelApi.post("/hotel", null, {
            params : {
                name : values.name,
                city : location,
                viabilities : viabilities.toString(),
                price : values.price
            }
        })
        .then(response => response.status)
        .catch(err => console.warn(err));
        this.formRef.current.resetFields();
      };


    render(){
        // Constantes para o gerenciamento de imagens
        const uploadButton = (
            <div>
              {this.state.loading ? <LoadingOutlined /> : <PlusOutlined />}
              <div className="ant-upload-text">Upload</div>
            </div>
          );
        const { imageUrl } = this.state;

        //Constante para o select de localização
        const locations = this.props.locations;

        //Constante para o select de datas
        const meses = this.props.meses;
        
        return (
            <Form
                ref={this.formRef}
                name="hotel-ref"
                initialValues={{
                    remember: true,
                }}
                onFinish={this.onFinish}
            >
                <Row>
                    <Col>
                        <Upload
                                name="avatar"
                                listType="picture-card"
                                className="avatar-uploader"
                                showUploadList={false}
                                action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                                beforeUpload={beforeUpload}
                                onChange={this.handleImageChange}
                            >
                                {imageUrl ? <img src={imageUrl} alt="avatar" style={{ width: '100%' }} /> : uploadButton}
                            </Upload>
                    </Col>
                    <Col>
                        <Row>
                            <Tooltip title = "Digite o nome do hotel">
                                <Form.Item 
                                name="name"
                                rules={[
                                    {
                                    required: true,
                                    message: 'Por favor, defina o nome do hotel!',
                                    }]}
                                >
                                        <Input
                                        style={{ 
                                            width: "20rem",
                                        }}
                                        placeholder="Nome do hotel"/>
                                </Form.Item>
                            </Tooltip>
                        </Row>
                        <Row>
                            
                            <Form.Item 
                            name="city"
                            rules={[
                                {
                                required: true,
                                message: 'Por favor, defina o nome do hotel!',
                                }]}
                            >
                                <Select
                                    style={{ 
                                        width: "20rem",
                                    }}
                                    placeholder="Localização"
                                >
                                    {locations.map((item) => (
                                        <Option value={item}>{item}</Option>
                                    ))}
                                </Select>
                            </Form.Item>
                        </Row>
                    </Col>
                </Row>                
                <Form.Item 
                label="Preço"
                name="price"
                rules={[
                    {
                      required: true,
                      message: 'Por favor, defina o preço!',
                    }]}>
                <InputNumber 
                placeholder="preço"
                formatter={value => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                parser={value => value.replace(/\$\s?|(,*)/g, '')}
                />
                </Form.Item>


                <Row>
                    <Col>
                    <Tooltip title = "Selecione quando o seu hotel começará a estar livre">
                        <Form.Item 
                        name="date_beginning"
                        rules={[
                            {
                            required: true,
                            message: 'Por favor, defina as datas de começo!',
                            }]}>
                            <Select
                                placeholder="Inicio"
                            >
                                {meses.map((item) => (
                                    <Option value={item}>{item}</Option>
                                ))}
                            </Select>
                        </Form.Item>
                    </Tooltip>
                    </Col>
                    <Col>
                    <Tooltip title = "Selecione até quando o seu hotel estará livre">
                        <Form.Item 
                        name="date_end"
                        rules={[
                            {
                            required: true,
                            message: 'Por favor, defina as datas de fim!',
                            }]}>
                                <Select
                                    placeholder="fim"
                                >
                                    {meses.map((item) => (
                                        <Option value={item}>{item}</Option>
                                    ))}
                                </Select>
                        </Form.Item>
                    </Tooltip>
                    </Col>
                </Row>


                <Form.Item
                label = "Cortesias"
                name = "viabilities"
                >                    
                    <Checkbox.Group style={{ width: '100%' }}>
                        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                        <Col span={8}>
                            <Checkbox value="piscina">piscina</Checkbox>
                        </Col>
                        <Col span={8}>
                            <Checkbox value="estacionamento">estacionamento</Checkbox>
                        </Col>
                        <Col span={8}>
                            <Checkbox value="Café da manhã">Café da manhã</Checkbox>
                        </Col>
                        <Col span={8}>
                            <Checkbox value="Ar condicionado">Ar condicionado</Checkbox>
                        </Col>
                        <Col span={8}>
                            <Checkbox value="Wifi">Wifi</Checkbox>
                        </Col>
                        <Col span={8}>
                            <Checkbox value="Academia">Academia</Checkbox>
                        </Col>
                        </Row>
                    </Checkbox.Group>
                </Form.Item>


                <Form.Item>
                <Button type="primary" htmlType="submit">Cadastrar</Button>
                </Form.Item>

            </Form>
        );
    }
}

export default RegisteryHotel;