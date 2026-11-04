import { Component } from "react";

export default class ErrorBoundary extends Component {
    state = { failed: false };

    static getDerivedStateFromError() {
        return { failed: true };
    }

    render() {
        if (this.state.failed) {
            return (
                <div className="min-h-screen bg-cream text-moss flex items-center justify-center p-8 text-center">
                    <p className="font-serif text-2xl">
                        Something went wrong.
                        <br />
                        Take a breath and refresh.
                    </p>
                </div>
            );
        }
        return this.props.children;
    }
}
