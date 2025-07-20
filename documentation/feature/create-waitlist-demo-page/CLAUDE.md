# Claude MCPs Quick Guide

This project uses Model Context Protocols (MCPs) to enhance development.

## BrowserMCP
- **Key**: browsermcp
- **Setup Command**: `claude mcp add browsermcp -- npx -y @browsermcp/mcp@latest`
- **Documentation**: https://docs.browsermcp.io

## Context7
- **Key**: context7
- **Setup Command**: `claude mcp add --transport http context7 https://mcp.context7.com/mcp`
- **Documentation**: https://context7.com

## Quick Setup
1. BrowserMCP: `claude mcp add browsermcp -- npx -y @browsermcp/mcp@latest`
2. Context7: `claude mcp add --transport http context7 https://mcp.context7.com/mcp`

## Tips
- Make sure Claude Desktop is installed and configured
- Restart Claude Desktop after adding new MCP servers
- Check the documentation links for detailed usage instructions
