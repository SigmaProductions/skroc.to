export interface OutputPort<TResponse> {
    Handle(response: TResponse): void;
}
