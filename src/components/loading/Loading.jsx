import React from 'react';
import ReactLoading from 'react-loading';
import { Article, list, Prop, Section, Title } from './Generic';

export default function Loading({ type, color }) {
  return (
    <Section>
      <Title>Carregando</Title>
      {
        list.map(l => (
          <Article
            key={l.prop}>
            <ReactLoading
              type='{l.prop}'
              color='#fff'
            />
            <Prop>
              {l.name}
            </Prop>
          </Article>
        ))
      }
    </Section>
  )
}
