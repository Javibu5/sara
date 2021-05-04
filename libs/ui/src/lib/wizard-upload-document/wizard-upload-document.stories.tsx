import { Meta, Story } from '@storybook/react';
import React from 'react';
import { withNextRouter } from 'storybook-addon-next-router';

import { Props,UploadDocumentWizard } from './wizard-upload-document';

export default {
    component: UploadDocumentWizard,
    title: 'Widgets/UploadDocumentWizard',
    decorators: [withNextRouter],
} as Meta;

const Template: Story<Props> = (args) => <UploadDocumentWizard {...args} />;

export const Default = Template.bind({});
Default.args = {
    open: true,
    onClose: {},
};