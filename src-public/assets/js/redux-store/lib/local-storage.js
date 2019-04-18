"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loadState = () => {
    try {
        const serializedState = localStorage.getItem('state');
        if (serializedState === null) {
            return undefined;
        }
        return JSON.parse(serializedState);
    }
    catch (err) {
        return undefined;
    }
};
exports.saveState = (state) => {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem('state', serializedState);
    }
    catch (err) {
        // tslint:disable-next-line:no-console
        console.error(err);
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9jYWwtc3RvcmFnZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImxvY2FsLXN0b3JhZ2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBYSxRQUFBLFNBQVMsR0FBRyxHQUFHLEVBQUU7SUFDNUIsSUFBSTtRQUNGLE1BQU0sZUFBZSxHQUFHLFlBQVksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDdEQsSUFBSSxlQUFlLEtBQUssSUFBSSxFQUFFO1lBQzVCLE9BQU8sU0FBUyxDQUFDO1NBQ2xCO1FBQ0QsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLGVBQWUsQ0FBQyxDQUFDO0tBQ3BDO0lBQUMsT0FBTyxHQUFHLEVBQUU7UUFDWixPQUFPLFNBQVMsQ0FBQztLQUNsQjtBQUNILENBQUMsQ0FBQztBQUVXLFFBQUEsU0FBUyxHQUFHLENBQUMsS0FBVSxFQUFFLEVBQUU7SUFDdEMsSUFBSTtRQUNGLE1BQU0sZUFBZSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDOUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxPQUFPLEVBQUUsZUFBZSxDQUFDLENBQUM7S0FDaEQ7SUFBQyxPQUFPLEdBQUcsRUFBRTtRQUNaLHNDQUFzQztRQUN0QyxPQUFPLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0tBQ3BCO0FBRUgsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IGxvYWRTdGF0ZSA9ICgpID0+IHtcbiAgdHJ5IHtcbiAgICBjb25zdCBzZXJpYWxpemVkU3RhdGUgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnc3RhdGUnKTtcbiAgICBpZiAoc2VyaWFsaXplZFN0YXRlID09PSBudWxsKSB7XG4gICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH1cbiAgICByZXR1cm4gSlNPTi5wYXJzZShzZXJpYWxpemVkU3RhdGUpO1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICByZXR1cm4gdW5kZWZpbmVkO1xuICB9XG59O1xuXG5leHBvcnQgY29uc3Qgc2F2ZVN0YXRlID0gKHN0YXRlOiBhbnkpID0+IHtcbiAgdHJ5IHtcbiAgICBjb25zdCBzZXJpYWxpemVkU3RhdGUgPSBKU09OLnN0cmluZ2lmeShzdGF0ZSk7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3N0YXRlJywgc2VyaWFsaXplZFN0YXRlKTtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWNvbnNvbGVcbiAgICBjb25zb2xlLmVycm9yKGVycik7XG4gIH1cblxufTtcbiJdfQ==