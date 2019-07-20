var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { FatalErrorMessage } from '../../errors/Fatal';
export const helmet = (resolver) => (...args) => __awaiter(this, void 0, void 0, function* () {
    try {
        return yield resolver(...args);
    }
    catch (err) {
        if (err.path) {
            throw new FatalErrorMessage(err);
        }
        else {
            throw err;
        }
    }
});
//# sourceMappingURL=helmet.js.map