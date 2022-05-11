import { Form, Input, Button, Checkbox } from 'antd';
import { useState } from 'react';

export const Login = () =>{

    const [utilizator, setUtilizator] = useState("");
    const [parola, setParola] = useState("");

    const cautaUtilizator = () => {

        const localI = localStorage.getItem("inregistrare");
        let flag = false;

        if(localI){
            const data = JSON.parse(localI);
            for(let i=0; i<data.length; i++){
                if(data[i].login == utilizator && data[i].parola == parola){
                    alert("Utilizator gasit");
                    flag = true;
                    break;
                }
            }
            if(!flag){
                alert("Utilizatorul nu a fost gasit");
            }

        }
    }

    return(
        <>

            <br />

            <Form
                name="basic"
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 16 }}
                initialValues={{ remember: true }}
                autoComplete="off"
                >
                <Form.Item
                    label="Numele utilizatorului"
                    name="login"
                    rules={[{ required: true, message: 'Please input your username!' }]}
                >
                    <Input 
                        value = { utilizator }
                        onChange={ (e) => {setUtilizator(e.target.value);}}
                    />
                </Form.Item>

                <Form.Item
                    label="Parola"
                    name="parola"
                    rules={[{ required: true, message: 'Please input your password!' }]}
                >
                    <Input.Password 
                        value = { parola }
                        onChange = { (e) => {setParola(e.target.value);}}
                    />
                </Form.Item>

                <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                    <Button type="primary" htmlType="submit" onClick={cautaUtilizator}>
                    Submit
                    </Button>
                </Form.Item>
                </Form>


        </>
    )
}