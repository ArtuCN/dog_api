'use client';

import { Descriptions, Card, Divider } from 'antd';

export default function Home() {
  return (
    <div style={{
      backgroundColor: '#f9f9f9',
      borderRadius: 12,
      boxShadow: '0 0 20px rgba(0,0,0,0.1)',
      margin: '40px auto',
    }}>
      <Card title="👋 Welcome to My Dog Page">
        <div style={{
          display: 'flex',
          gap: 30,
          alignItems: 'flex-start'
        }}>
          <div style={{ flex: 2 }}>
            <Descriptions column={1} layout="vertical" labelStyle={{ fontWeight: 'bold' }}>
              <Descriptions.Item label="Presentation">
                Hi, I'm ArtuCN and this is my page
              </Descriptions.Item>
              <Descriptions.Item label="How I made it">
                I have spent like 8 hours to finish this thing
              </Descriptions.Item>
              <Descriptions.Item label="Do I like it?">
                Absolutely not, it is disgusting, but it was few time and it was my first time with NodeJS
              </Descriptions.Item>
              <Descriptions.Item label="Do I like Node?">
                Yes, probably it is the best front-end framework I have ever used
              </Descriptions.Item>
              <Descriptions.Item label="Final comment">
                I just want to say that I hate this API, it hasn't images and there are few information.
                If you think that I am the problem you are a bad person, so I had to create the worst page ever!
              </Descriptions.Item>
            </Descriptions>
          </div>

          <div style={{ flex: 1 }}>
            <img
              src="/doggo.webp"
              alt="Dog image"
              style={{ width: '100%', borderRadius: 10 }}
            />
          </div>
        </div>
      </Card>
    </div>
  );
}
