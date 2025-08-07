'use client'

import React, { useState, useEffect } from 'react';
import { getGroups } from '../api/dog_service';
import type { Group } from '@/models/groups';
import { Button, Descriptions, Card } from 'antd';
import { findGroupById } from '@/utils/utils';
export default function Groups() {
  const [groups, setGroups] = useState<Group[]>([]);
  const [selected, setSelected] = useState<string>('');
  const [group, setGroup] = useState<Group | null>(null);
  const fillGroups = async () => {
    const res = await getGroups();
    setGroups(res);
  };

  useEffect(() => {
    fillGroups();
  }, []);

  const handleClick = (id: string) => {
    setSelected(id);
    const res = findGroupById(id, groups);
    if (res != undefined)
        setGroup(res);

  };

  return (
    <div style={{ padding: 20 }}>
      {groups.length === 0 ? (
        <p>Loading groups...</p>
      ) : (
        <Descriptions column={1} bordered title="Dog Groups">
          {groups.map((group) => (
            <Descriptions.Item key={group.id} label={group.attributes.name}>
              <Button type="primary" onClick={() => handleClick(group.id)}>
                Show More Info
              </Button>
            </Descriptions.Item>
          ))}
        </Descriptions>
      )}

      {selected !== '' && (
        <>
            <div
            style={{
                position: 'fixed',
                top: 0, left: 0,
                width: '100vw',
                height: '100vh',
                backgroundColor: 'rgba(0,0,0,0.4)',
                backdropFilter: 'blur(4px)',
                zIndex: 1000,
            }}
            onClick={() => setSelected('')}
            />
            <div
            style={{
                position: 'fixed',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                zIndex: 1001,
                width: 400,
            }}
            >
            <Card
                title="Selected Group Info"
                extra={
                <Button type="text" danger onClick={() => setSelected('')}>
                    Close
                </Button>
                }
                style={{ textAlign: 'center', backgroundColor: '#f5f5f5' }}
            >
                <p style={{ fontSize: 18, fontWeight: 'bold' }}>
                {groups.find((g) => g.id === selected)?.attributes.name}
                </p>
                <p style={{ fontStyle: 'italic', color: '#888' }}>
                At the moment there aren't other infos.
                </p>
            </Card>
            </div>
        </>
        )}


    </div>
  );
}
