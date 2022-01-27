import {AccountService, IPrinter} from "../main/bankkata"
import {mock} from 'jest-mock-extended'

describe('test AccountService', () => {
    
    it("accountService is initialized", () => {
        let printerMock = mock<IPrinter>();
        const accountService = new AccountService(printerMock)
        expect(accountService).toBeDefined();
    }),

    it("should print a empty account statement", () => {
        let printerMock = mock<IPrinter>();
        const accountService = new AccountService(printerMock);
        expect(printerMock.print.mock).toBeCalledWith("Date||Amount||Balance");
    }),

    it("should start with a balance of zero", () => {
        let printerMock = mock<IPrinter>();
        const accountService = new AccountService(printerMock)
        expect(accountService.balance).toBe(0);
    })

/*     Given a client makes a deposit of 1000 on 10-01-2012
    And a deposit of 2000 on 13-01-2012
    And a withdrawal of 500 on 14-01-2012
    When they print their bank statement */
}
)