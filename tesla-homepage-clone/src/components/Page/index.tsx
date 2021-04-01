import React from 'react';

import { ModelsWrapper, ModelSection } from '../Model';
import DefaultOverlayContent from '../DefaultOverlayContent';

import { Container } from './styles';

function Page() {
  return (
    <Container>
      <ModelsWrapper>
        <div>
          {[
            'Model one',
            'Model two',
            'Model thre',
            'Model four',
            'Model five',
            'Model six',
            'Model seven',
          ].map(modelName => (
            <ModelSection
              key={modelName} 
              className="colored"
              modelName={modelName}
              overlayNode={
                <DefaultOverlayContent 
                  label={modelName}
                  description="Order Online for Delivery"
                />
              }
            />
          ))}
        </div>
      </ModelsWrapper>
    </Container>
  );
};

export default Page;
