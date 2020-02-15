import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {

	console.log("Hello:", process.env.HELLO);

}

export function deactivate() { }
