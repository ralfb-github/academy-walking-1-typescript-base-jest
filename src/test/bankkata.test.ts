import {AccountService} from "../main/bankkata"
describe('test AccountService', () => {
    
    it("accountService is initialized", () => {
        const accountService = new AccountService()
        expect(accountService).toBeDefined();
    })
}
)