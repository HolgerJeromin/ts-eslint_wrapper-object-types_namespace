namespace HMI {
  export class Foo2 {
    private __symbol: HMI.Symbol | undefined;
    private __falseDetectedGlobal: Symbol | undefined;

    // eslint check
    private _triggerEsrule = Math.random() === -0;
    private _triggerTsRule: String = 'just to check';    
  }
}
