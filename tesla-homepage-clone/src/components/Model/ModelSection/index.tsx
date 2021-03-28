import { ReactNode } from 'react';

import { Container } from './styles';

interface ModelSectionProps extends React.HTMLAttributes<HTMLDivElement> {
  modelName: string;
  overlayNode: React.ReactNode;
}

function ModelSection({ 
  modelName, 
  overlayNode, 
  children,
  ...props 
}: ModelSectionProps) {
  return (
    <Container {...props}>
      {children}
    </Container>
  );
};

export default ModelSection;
