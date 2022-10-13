using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using SignaAPI.Data;

namespace SignaAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PessoaController : ControllerBase
    {
        private readonly DataContext _context;
        public PessoaController(DataContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<List<Pessoa>>> GetPessoas()
        {
            return Ok(await _context.Pessoas.ToListAsync());
        }

        [HttpPost]
        public async Task<ActionResult<List<Pessoa>>> CreatePessoa(Pessoa pessoa)
        {
            _context.Pessoas.Add(pessoa);
            await _context.SaveChangesAsync();

            return Ok(await _context.Pessoas.ToListAsync());
        }

        [HttpPut]
        public async Task<ActionResult<List<Pessoa>>> UpdatePessoa(Pessoa pessoa)
        {
            var dbPessoa = await _context.Pessoas.FindAsync(pessoa.PessoaId);
            if (dbPessoa == null)
                return BadRequest("Pessoa não encontrada");

            dbPessoa.NomeFantasia = pessoa.NomeFantasia;
            dbPessoa.CnpjCpf = pessoa.CnpjCpf;

            await _context.SaveChangesAsync();

            return Ok(await _context.Pessoas.ToListAsync());
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult<List<Pessoa>>> DeletePessoa(int id)
        {
            var dbPessoa = await _context.Pessoas.FindAsync(id);
            if (dbPessoa == null)
                return BadRequest("Pessoa não encontrada");

            _context.Pessoas.Remove(dbPessoa);
            await _context.SaveChangesAsync();

            return Ok(await _context.Pessoas.ToListAsync());
        }
    }
}
