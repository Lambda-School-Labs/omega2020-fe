import Hard from '../../../../components/SudokuGame/puzzle-handler/grid-axios-call/9x9'
import  { configure } from 'enzyme';
import '@testing-library/jest-dom/extend-expect';
import Adapter from 'enzyme-adapter-react-16';
import 'whatwg-fetch';
import { rest } from 'msw';
import { setupServer } from 'msw/node';

configure({ adapter: new Adapter() });


const server = setupServer(rest.get("https://omega2020.herokuapp.com/puzzle", (req, res, ctx) => {
    return res(
        ctx.status(200),
        ctx.json({data})
    )
})

);

beforeAll(() => server.listen());
afterAll(() => server.close());
afterEach(() => server.resetHandlers());
