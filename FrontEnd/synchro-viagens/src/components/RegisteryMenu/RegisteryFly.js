import React from "react"

import { Form, Input, InputNumber, Tooltip, Row, Col, Button, Upload, message, Select} from 'antd';
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';

const { Option } = Select;

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

class RegisteryFly extends React.Component{
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

    onFinish = values => {
        console.log(values);
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
                            <Form.Item
                            label = "Compania"
                            name="company"
                            rules={[
                                {
                                required: true,
                                message: 'Por favor, defina o nome da Compania Aérea!',
                                }]}
                            >
                                <Input
                                    style={{ 
                                        width: "20rem",
                                    }}
                                    placeholder="Compania Aérea"/>
                            </Form.Item>
                        </Row>
                        <Row>
                            <Form.Item
                            label = "Preço"
                            name="price"
                            rules={[
                                {
                                required: true,
                                message: 'Por favor, defina o preço!',
                                }]}>
                            <InputNumber 
                            placeholder="Preço da Passagem"
                            formatter={value => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                            parser={value => value.replace(/\$\s?|(,*)/g, '')}
                            />
                            </Form.Item>
                        </Row>
                    </Col>
                </Row>
                <Row>
                    <Col>
                    <Tooltip title = "Selecione de onde partirá o voo">
                        <Form.Item 
                        name="from"
                        rules={[
                            {
                            required: true,
                            message: 'Por favor, defina de onde será o voo!',
                            }]}>
                                <Select
                                placeholder="De"
                                style = {{
                                    width : "20rem"
                                }}
                                >
                                    {locations.map((item) => (
                                        <Option value={item}>{item}</Option>
                                    ))}
                                </Select>
                        </Form.Item>
                    </Tooltip>    

                    </Col>

                    <Col>
                    <Tooltip title = "Selecione onde chegará o voo">

                        <Form.Item 
                        name="to"
                        rules={[
                        {
                        required: true,
                        message: 'Por favor, defina para onde será o voo!',
                        }]}>
                            <Select
                            placeholder="Para"
                            style = {{
                                width : "20rem"
                            }}
                            >
                                {locations.map((item) => (
                                    <Option value={item}>{item}</Option>
                                ))}
                            </Select>
                        </Form.Item>
                    </Tooltip>
                    </Col>
                </Row>


                <Form.Item>
                <Button type="primary" htmlType="submit">Cadastrar</Button>
                </Form.Item>

            </Form>
        );
    }
}

export default RegisteryFly;