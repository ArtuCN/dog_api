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
                I have spent like 10 hours to finish this thing and probably I'm never gonna touch this again 
              </Descriptions.Item>
              <Descriptions.Item label="Do I like it?">
                Absolutely not, it is disgusting, but it was few time and it was my first time with NodeJS and there wasn't a lot of cool things to use in this Api
              </Descriptions.Item>
              <Descriptions.Item label="Do I like Node?">
                Yes, probably it is the best front-end framework I have ever used
              </Descriptions.Item>
              <Descriptions.Item label="Final comment">
                I don't like it but if you don't like it you are a bad person, if you think that you are so better than me try you to create something cool with ah not uopdated-api by using a framework for the first time in like hours
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
