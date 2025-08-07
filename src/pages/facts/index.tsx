'use client';

import { useEffect, useState } from 'react';
import { getFacts } from '../api/dog_service';
import { Descriptions, Button } from 'antd';

export default function Facts() {
const [facts, setFacts] = useState<string[]>([]);
const [show, setShow] = useState<boolean>(false);
  const fillFacts = async () => {
    setShow(false);
    const promises = Array.from({ length: 16}, () => getFacts());
    const results = await Promise.all(promises);
    setFacts(results);
    setShow(true);
};

  useEffect(() => {
    fillFacts();
  }, []);

  const handleClick = () => {
    fillFacts();
  };

  return (
    <div style={{ padding: 20, fontSize: '18px' }}>
        {show == true && (
          <div style={{ marginTop: 20, textAlign:'right'}}>
              <Button onClick={handleClick} type="primary">
              Reload
              </Button>
          </div>
        )}
      {show == true ? (
        <Descriptions column={2} bordered>
          {facts.map((fact, i) => (
            <Descriptions.Item key={i} label={`Fact ${i + 1}`}>
              {fact}
            </Descriptions.Item>
          ))}
        </Descriptions>
      ) : (
        <div style={{textAlign:'center'}}>
          <h1>Loading Facts..</h1>
        <div style={{ flex: 1, gap: 10}}>
            <img
              src="/uwu.webp"
              alt="Dog image"
              style={{ width: '50%', borderRadius: 10 }}
            />
        </div>
        </div>

      )}
    </div>
  );
}
