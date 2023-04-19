import { Card, Container, Typography } from '../../components';
import { Component, createSignal, For } from 'solid-js';
import CardContent from '@suid/material/CardContent';
import language from '../../config/language';

const Glossary: Component = () => {
  const [glossaries, setGlossaries] = createSignal();
  return (
    <Container>
      <Card>
        <CardContent>
          <Typography
            variant="h5"
            component="h1"
            className="text-gray-200"
          >
            {language.Glossary.ja}
          </Typography>
        </CardContent>
      </Card>
    </Container>
  );
}

export default Glossary;
