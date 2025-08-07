import { Descriptions, Form, Input, Button, Space, Tag, Switch } from 'antd';
import { useState } from "react";
import { text } from 'stream/consumers';

type Settings = {
    username: string,
    email: string,
    notifications: boolean,
    theme: boolean,
};

export default function settings()
{
    const [settings, setSettings] = useState<Settings>({
    username: 'ArtuCN',
    email: 'artu@example.com',
    notifications: true,
    theme: true,
    });
    const [isEditing, setIsEditing] = useState<Boolean>(false);
    const [form] = Form.useForm();

    const startEdit=()=>{
        setIsEditing(true);
        form.setFieldsValue(settings); 
    }
    const cancelEdit = () => {
        setIsEditing(false);
    };
    const saveEdit = async()=> {
        const values = await form.validateFields();
        setSettings(values);
        setIsEditing(false);
    };
    return(
        <>
            {!isEditing 
            ? (
                <>
                <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: 16 }}>
                <Button type="primary" onClick={startEdit}>
                    Modify
                </Button>
                </div>
                <Descriptions title="User Settings" bordered column={1} labelStyle={{ fontWeight: 'bold' }}>
                    <Descriptions.Item label="Username">{settings.username}</Descriptions.Item>
                    <Descriptions.Item label="Email">{settings.email}</Descriptions.Item>
                    <Descriptions.Item label="Notifications">{settings.notifications ? <Tag color="green">Active</Tag> : <Tag color="red">Silenced</Tag>}</Descriptions.Item>
                    <Descriptions.Item label="Theme">
                    {settings.theme == true ? (
                        <Tag color="default" style={{ color: 'black' }}>Light</Tag>
                    ) : (
                        <Tag color="gray" style={{ color: 'white' }}>Dark</Tag>
                    )}
                    </Descriptions.Item>
                </Descriptions>
                </>
            ) : (
                <Form form={form} layout="vertical" initialValues={settings}>
                <Form.Item
                    label="Username"
                    name="username"
                    rules={[{ required: true, message: 'Inserisci lo username' }]}
                >
                <Input />
                </Form.Item>
                <Form.Item
                    label="Email"
                    name="email"
                    rules={[{ type: 'email', message: 'Email non valida' }]}
                >
                <Input />
                </Form.Item>
                <Form.Item label="Notifications" name="notifications">
                    <Switch checkedChildren="Active" unCheckedChildren="Silenced" />
                </Form.Item>
                <Form.Item label="Theme" name="theme">
                    <Switch checkedChildren="Light" unCheckedChildren="Dark"/>
                </Form.Item>
                <Space>
                    <Button type="primary" onClick={saveEdit}>
                    Save
                    </Button>
                    <Button onClick={cancelEdit}>Cancel</Button>
                </Space>
                </Form>
                
            )
        }
        <div>
            {!settings.theme ?
                (
                    <div style={{color:'red', textAlign:'center', padding:20}}>
                        <h2> NO dark mode lol</h2>
                    </div>

                ) :
                (
                    <h2></h2>
                )
            }
        </div>
        </>
        
    );
}