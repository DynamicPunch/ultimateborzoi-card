import { html, TemplateResult } from 'lit';
import '../src/my-card.js';

export default {
  title: 'MyCard',
  component: 'my-card',
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

interface Story<T> {
  (args: T): TemplateResult;
  args?: Partial<T>;
  argTypes?: Record<string, unknown>;
}

interface ArgTypes {
  title?: string;
  backgroundColor?: string;
}

const Template: Story<ArgTypes> = ({ title, backgroundColor = 'white' }: ArgTypes) => html`
  <my-card style="--my-card-background-color: ${backgroundColor}" .title=${title}></my-card>
`;

export const App = Template.bind({});
App.args = {
  title: 'My app',
};
